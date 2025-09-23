export interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
}

export const DEFAULT_OPTIONS: Required<Options> = {
  limit: 9,
  offset: 0,
  gender: '',
};
