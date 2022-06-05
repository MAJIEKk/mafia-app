/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Paper from "@mui/material/Paper";

import { Badge, List } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  isActive: boolean;
  priority: number;
  children: ReactNode;
}

export const GamerCardWrap = ({ isActive, priority, children }: Props) => (
  <Paper
    css={css`
      margin: 8px;
      min-width: 220px;
      position: relative;
    `}
    elevation={isActive ? 10 : 1}
  >
    <Badge
      css={css`
        position: absolute;
        right: 6px;
        top: 6px;
      `}
      badgeContent={priority}
      color="primary"
    />
    <List>{children}</List>
  </Paper>
);