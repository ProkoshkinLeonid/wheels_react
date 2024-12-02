import { FC } from "react"
import {
  NavLink as $NavLink,
  NavLinkProps as $NavLinkProps,
} from "react-router-dom"

import { clsn } from "@utils/clsn"

import classes from "./NavLink.module.css"

export const NavLink: FC<$NavLinkProps> = ({ ...props }) => {
  return (
    <$NavLink
      className={({ isActive }) =>
        clsn(classes.default, isActive && classes.active)
      }
      {...props}
    />
  )
}
