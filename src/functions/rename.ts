import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupRename = (fileSystem: FileSystem, options: FsOptions) => {
  const rename = async () => {
    return;
  };

  return rename;
};

export type rename = ReturnType<typeof setupRename>;
