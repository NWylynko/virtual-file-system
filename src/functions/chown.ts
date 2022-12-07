import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

// Changes the ownership of a file.

export const setupChown = (fileSystem: FileSystem, options: FsOptions) => {
  const chown = async (
    path: string,
    uid: number,
    gid: number,
  ): Promise<undefined> => {
    return;
  };

  return chown;
};

export type chown = ReturnType<typeof setupChown>;
