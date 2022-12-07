import type { FileSystem } from "../filesystem";
import type { FsOptions } from "../fsOptions";

//

export const setupStat = (fileSystem: FileSystem, options: FsOptions) => {
  const stat = async () => {
    return;
  };

  return stat;
};

export type stat = ReturnType<typeof setupStat>;
