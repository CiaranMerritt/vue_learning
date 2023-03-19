import type Emjoi from "./Emjoi";

interface Entry {
  id: number;
  body: string;
  emoji: Emjoi | null;
  createdAt: Date;
  userId: number;
}

export type { Entry };
