import React from "react";
import { searchDiary } from "../../Pages/DiaryHome/diaryRedux";
import { useDispatch } from "react-redux";
import { Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState<string>("");

  const handleClick = () => {
    dispatch(searchDiary(search));
  };

  return (
    <div style={{ padding: "20px" }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <InputBase
          type="text"
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by Title"
          onChange={(e) => {
            dispatch(searchDiary(e.target.value));
            setSearch(e.target.value);
          }}
        />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleClick}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}

export default Header;
