import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

// Changes the permissions of a file.

export const setupChmod = (fileSystem: FileSystem, options: FsOptions) => {
  const chmod = async (
    path: string,
    mode: string | number,
  ): Promise<undefined> => {
    return;
  };

  return chmod;
};

export type chmod = ReturnType<typeof setupChmod>;
