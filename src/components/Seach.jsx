import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: '100%', // Garante que o campo não exceda o espaço disponível
  [theme.breakpoints.up('md')]: {
    maxWidth: '600px', // Define a largura máxima para o desktop
  },
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #ddd',
  padding: '4px 8px',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right: 0,
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#888',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(5), // Alinha o texto à esquerda
    paddingRight: `calc(1em + ${theme.spacing(4)})`, // Deixa espaço para o ícone
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: '14px',
  },
}));

const SearchBar = () => {
  return (
    <Search>
      <StyledInputBase
        placeholder="Pesquisar produto..."
        inputProps={{ 'aria-label': 'search' }}
      />
      <SearchIconWrapper>
        <SearchIcon style={{ color: '#ccc' }} />
      </SearchIconWrapper>
    </Search>
  );
}

export default SearchBar;
