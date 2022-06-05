/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { ListGamers } from "./components/ListGamers";
import { AddCardPopup } from "./components/AddCardPopup";
import { useRoles, useGames, usePopup, useNumbers, useNight } from "./hooks";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

function App() {
  const { handleClickOpen, handleClose, isOpen } = usePopup();
  const { roles, disableRole, resetRoles } = useRoles();
  const { numbers, deleteNumber, resetNumbers } = useNumbers();

  const { addGamer, gamers, setGamers, onChageGamerAbility } = useGames({
    deleteNumber,
    disableRole,
    roles,
  });

  const { onPlayNigth, onGamerPush } = useNight({ gamers, setGamers });

  return (
    <div
      css={css`
        max-width: 700px;
        margin: auto;
        background: #ddd;
        padding: 15px;
      `}
    >
      <h2>MAFIA GAME</h2>

      <Button
        onClick={handleClickOpen}
        variant="contained"
        startIcon={<AddCircleIcon />}
      >
        Додати гравця
      </Button>

      <Button
        onClick={onPlayNigth}
        variant="contained"
        color="secondary"
        startIcon={<PlayCircleFilledWhiteIcon />}
        css={css`
          margin-left: 15px;
        `}
      >
        Почати ніч
      </Button>

      <AddCardPopup
        roles={roles}
        numbers={numbers}
        onClose={handleClose}
        open={isOpen}
        onSubmit={addGamer}
      />

      <ListGamers
        gamers={gamers}
        onGamerPush={onGamerPush}
        onChageGamerAbility={onChageGamerAbility}
      />
    </div>
  );
}

export default App;
