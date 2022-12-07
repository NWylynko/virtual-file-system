import type { FileSystem } from "./filesystem";
import type { FsOptions } from "./fsOptions";

import { setupAccess } from "./functions/access";
import { setupAppendFile } from "./functions/appendFile";
import { setupChmod } from "./functions/chmod";
import { setupChown } from "./functions/chown";
import { setupCopyFile } from "./functions/copyFile";
import { setupCp } from "./functions/cp";
import { setupLchmod } from "./functions/lchmod";
import { setupLchown } from "./functions/lchown";
import { setupLink } from "./functions/link";
import { setupLstat } from "./functions/lstat";
import { setupLutimes } from "./functions/lutimes";
import { setupMkdir } from "./functions/mkdir";
import { setupMkdtemp } from "./functions/mkdtemp";
import { setupOpen } from "./functions/open";
import { setupOpendir } from "./functions/opendir";
import { setupReaddir } from "./functions/readdir";
import { setupReadFile } from "./functions/readFile";
import { setupReadlink } from "./functions/readlink";
import { setupRealpath } from "./functions/realpath";
import { setupRename } from "./functions/rename";
import { setupRm } from "./functions/rm";
import { setupRmdir } from "./functions/rmdir";
import { setupStat } from "./functions/stat";
import { setupSymlink } from "./functions/symlink";
import { setupTruncate } from "./functions/truncate";
import { setupUnlink } from "./functions/unlink";
import { setupUtimes } from "./functions/utimes";
import { setupWatch } from "./functions/watch";
import { setupWriteFile } from "./functions/writeFile";

export const createFs = (options: FsOptions = {}) => {
  const fileSystem: FileSystem = {};

  return {
    // access: setupAccess(fileSystem, options),
    // appendFile: setupAppendFile(fileSystem, options),
    // chmod: setupChmod(fileSystem, options),
    // chown: setupChown(fileSystem, options),
    // copyFile: setupCopyFile(fileSystem, options),
    // cp: setupCp(fileSystem, options),
    // lchmod: setupLchmod(fileSystem, options),
    // lchown: setupLchown(fileSystem, options),
    // link: setupLink(fileSystem, options),
    // lstat: setupLstat(fileSystem, options),
    // lutimes: setupLutimes(fileSystem, options),
    // mkdir: setupMkdir(fileSystem, options),
    // mkdtemp: setupMkdtemp(fileSystem, options),
    // open: setupOpen(fileSystem, options),
    // opendir: setupOpendir(fileSystem, options),
    // readdir: setupReaddir(fileSystem, options),
    // readFile: setupReadFile(fileSystem, options),
    // readlink: setupReadlink(fileSystem, options),
    // realpath: setupRealpath(fileSystem, options),
    // rename: setupRename(fileSystem, options),
    // rm: setupRm(fileSystem, options),
    // rmdir: setupRmdir(fileSystem, options),
    // stat: setupStat(fileSystem, options),
    // symlink: setupSymlink(fileSystem, options),
    // truncate: setupTruncate(fileSystem, options),
    // unlink: setupUnlink(fileSystem, options),
    // utimes: setupUtimes(fileSystem, options),
    // watch: setupWatch(fileSystem, options),
    // writeFile: setupWriteFile(fileSystem, options)
  };
};

export type createFs = typeof createFs;
export type Fs = ReturnType<createFs>;
