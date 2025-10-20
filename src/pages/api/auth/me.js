import { verifyAdminToken, COOKIE_NAME } from "@/lib/auth";

export default async function handler(req, res) {
  const cookie = req.headers.cookie || "";
  const token = cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE_NAME}=`))
    ?.split("=")[1];
  const payload = token ? verifyAdminToken(token) : null;
  if (!payload) return res.status(401).json({ authenticated: false });
  return res.status(200).json({ authenticated: true, user: payload });
}
