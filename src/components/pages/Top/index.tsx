import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { VFC } from 'react';

export const Top: VFC = () => {
  return (
    <Container component="main">
      <Paper
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={12}
          mt={12}
          mb={12}
        >
          <Typography variant="h2">Chunagonへようこそ!</Typography>
          <Box
            sx={{
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h3">実験の流れ</Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="1. homeを押し問題一覧ページに移動" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2. 問題を上から全て解く" />
              </ListItem>
              <ListItem>
                <ListItemText primary="3. アンケートに答える" />
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};
