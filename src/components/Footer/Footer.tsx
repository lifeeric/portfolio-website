import * as React from "react"

import { AiFillHeart } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { RiStackOverflowLine } from "react-icons/ri"
import { FaTwitter } from "react-icons/fa"
import { FaDev } from "react-icons/fa"
import { FiCodepen } from "react-icons/fi"

import "./Footer.scss"

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__outer">
      <div className="footer__wrapper">
        <div className="footer__cols">
          <div className="footer__details">
            <h1>Eric Roth.</h1>
            <p className="footer__heart">
              © 2020 | Build with <AiFillHeart /> by me | source on{" "}
              <a
                target="_blank"
                href="https://github.com/lifeeric/portfolio-website"
              >
                Github
              </a>
            </p>
          </div>
          <div className="footer__links">
            <a target="_blank" href="https://github.com/lifeeric">
              <AiFillGithub />
            </a>{" "}
            <a
              target="_blank"
              href="https://stackoverflow.com/users/8108684/code?tab=profile"
            >
              <RiStackOverflowLine />
            </a>
            <a target="_blank" href="https://twitter.com/ISleepAndCode">
              <FaTwitter />
            </a>
            <a target="_blank" href="https://dev.to/hasone">
              <FaDev />
            </a>
            <a
              target="_blank"
              href="https://www.codegrepper.com/app/profile.php?id=41157"
            >
              <FiCodepen />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
