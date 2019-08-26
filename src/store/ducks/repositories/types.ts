/**
 * Actions Types
 */

export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

 /**
  * Data types
  */
 export interface Repository {
   id: number
   name: string
 }


  /**
   * State type
   * readonly: somente leitura o estado é imutável
   */
   export interface RepositoriesState {
    readonly data: Repository[]
    readonly loading: boolean
    readonly error: boolean
   }