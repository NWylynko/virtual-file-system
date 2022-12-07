import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupWatch = (fileSystem: FileSystem, options: FsOptions) => {
  const watch = async () => {
    return;
  };

  return watch;
};

export type watch = ReturnType<typeof setupWatch>;
