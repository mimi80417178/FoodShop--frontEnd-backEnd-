const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");


const GOOGLE_CLIENT_ID = "954937282301-ko5ue6eq0efdj8qj1d8434h7d5bdih83.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "221987b18488843734c7";
const GITHUB_CLIENT_SECRET = "04443d068f5a99d5d41ee80cec1a2f2f8ba42a6c";

const FACEBOOK_APP_ID = "1355409704904137";
const FACEBOOK_APP_SECRET = "ff44f9267694f1d7e21d64c676976195";

//Google
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

//Github
passport.use(new GithubStrategy(
    {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
)
);

//Facebook
passport.use(
    new FacebookStrategy(
        {
            clientID: FACEBOOK_APP_ID,
            clientSecret: FACEBOOK_APP_SECRET,
            callbackURL: "/auth/facebook/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);


passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});