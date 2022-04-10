const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const express = require("express");

module.exports = (app) =>  {
    const router_auth = express.Router();

    router_auth.route("/signup")
        .post(
            [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
            ],
            controller.signup
        );

    router_auth.route("/signin")
        .post(controller.signin)
    

    app.use("/api/auth", router_auth);
};