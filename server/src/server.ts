import express, { Express, Request, Response } from "express";
import { ProfileRouter } from "./routes/Profile.ts";
import { AuthRoute } from "./routes/auth.ts";
import "./util/db.ts";
import { auth } from "./middlewares/authenication-meddleware";
import cors from "cors";
import cookieParser from "cookie-parser";
import { verificationRoute } from "./routes/verification.ts";
import { rateLimit } from "express-rate-limit";
import hpp from 'hpp'
// Configure
const port = 5000;
const app: Express = express();
const limiter = rateLimit({
  windowMs:10*60*1000,//10 minutes
  max:50,//limit each IP to 50 requests
  standardHeaders:true,
  legacyHeaders:false
})
// Middleware
app.use(express.json({ limit: "1mb" })); // Set the size limit to 10MB
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use('/api/',limiter) // limite request for 50 request per 1o minuts
app.use(hpp({whitelist:['price','sold',"quantity","filter"]}))// allow only those a ducplicated http prameteers
app.set("views","./src/views")
app.set("view engine","ejs")

// Routes
app.use("/api/auth", AuthRoute); // Mount the AuthRoute at "/auth" path
app.use("/api/profile",auth,ProfileRouter); // Mount the ProfileRouter at "/profile" path
app.use("/api/verification", verificationRoute); // Mount the verificationRoute at "/verification" path
app.get("/",(req: Request, res: Response)=>{
  res.render('VerifyEmailTemplate.ejs')
})
// Start the server
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
