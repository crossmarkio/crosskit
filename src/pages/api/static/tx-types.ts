/* eslint-disable @typescript-eslint/no-unsafe-call */
import path from "path";
import fs from "fs";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  filesArray: string[];
};

const getDirectories = (source: string) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const getFiles = (source: string) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

export const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  //Find the absolute path of the json directory

  //Read the json data file data.json
  const filesArray = getFiles("src/data/txns");
  //Return the content of the data file in json format

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  res.status(200).json({ filesArray });
};

export default handler;
