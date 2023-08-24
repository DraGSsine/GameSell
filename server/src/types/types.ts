import { Document, Types } from "mongoose";

export type UserType =
  | (Document<
      unknown,
      {},
      { email?: string | undefined; password?: string | undefined }
    > &
      Omit<
        { email?: string | undefined; password?: string | undefined } & {
          _id: Types.ObjectId;
        },
        never
      >)
  | null;
