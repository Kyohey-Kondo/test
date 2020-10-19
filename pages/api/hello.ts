// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 今まだ使ってないですが残しておきます

export default (req: any, res: { statusCode: number; json: (arg0: { name: string; }) => void; }) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
