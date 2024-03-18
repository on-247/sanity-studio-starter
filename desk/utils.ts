import {ConfigContext} from 'sanity'
import {StructureBuilder} from 'sanity/desk'

/**
 * Helper for creating and typing composable desk structure parts.
 */
export const defineStructure = <StructureType>(
  factory: (S: StructureBuilder, context: ConfigContext) => StructureType
) => {
  return factory
}