import { FC } from "react"

import {
  ButtonProps as $ButtonProps,
  createPolymorphicComponent,
  PolymorphicComponentProps,
  Button as $Button,
} from "@mantine/core"
import { clsn } from "@utils/clsn"

import classes from "./Button.module.css"

export interface ButtonProps
  extends Omit<
    PolymorphicComponentProps<$ButtonProps>,
    "component" | "variant"
  > {
  variant?: "transparent"
}

export const Button: FC<ButtonProps> = createPolymorphicComponent<
  "button",
  ButtonProps
>(({ variant = "transparent", children, ...props }) => {
  return (
    <$Button
      variant={variant}
      classNames={() => ({
        root: clsn(classes.root, classes[variant]),
      })}
      {...props}
    >
      {children}
    </$Button>
  )
})
