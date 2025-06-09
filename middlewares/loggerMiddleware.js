// import fs from "fs";

// export const loggerMiddleware = async (req, res, next) => {
//   try {
//     let logs = `\n ${req.method} ${req.url}`;
//     fs.writeFileSync("./log.txt", JSON.stringify(logs));
//     console.log(logs);
//     next();
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong." });
//     console.log(error);
//   }
// };
