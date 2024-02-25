import { Component } from "../classes/Component";
import { ComponentVariable } from "../classes/ComponentVariable";
import { getReferencedVariablesInside } from "./get-referenced-variables-inside";

export function getComponentVariablesInComponent(
  path: babel.NodePath<babel.types.Node>,
  component: Component
) {
  const componentVariables = new Set<ComponentVariable>();

  const reerencedVariablesInPath = getReferencedVariablesInside(path);
  reerencedVariablesInPath.forEach((referencedVariable) => {
    if (component.isTheFunctionParentOf(referencedVariable.path)) {
      componentVariables.add(
        component.addComponentVariable(referencedVariable)
      );
    }
  });

  return componentVariables;
}