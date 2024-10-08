import { connectionSource } from "../database/data-source";
import { User } from "../database/entity/user";

export const uploadProfileImageService = async (
  userId: string,
  urls: string[]
): Promise<{ profilePic: string }> => {
  const userRepo = connectionSource.getRepository(User);
  const user = await userRepo.update(userId, { profilePic: urls[0] });
  console.log(user);

  return { profilePic: urls[0] };
};
