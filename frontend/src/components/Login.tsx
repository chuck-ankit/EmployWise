import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Link,
} from '@mui/material';
import { useAuth } from '../context/AuthContext';
import styled from '@emotion/styled';

const GridContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(12, 1fr);
`;

const GridItem = styled.div<{ xs?: number; sm?: number; md?: number; lg?: number; xl?: number }>`
  grid-column: span ${props => props.xs || 12};
  
  @media (min-width: 600px) {
    grid-column: span ${props => props.sm || props.xs || 12};
  }
  
  @media (min-width: 900px) {
    grid-column: span ${props => props.md || props.sm || props.xs || 12};
  }
  
  @media (min-width: 1200px) {
    grid-column: span ${props => props.lg || props.md || props.sm || props.xs || 12};
  }
  
  @media (min-width: 1536px) {
    grid-column: span ${props => props.xl || props.lg || props.md || props.sm || props.xs || 12};
  }
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, error } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData);
      navigate('/dashboard');
    } catch (error) {
      // Error is handled by the auth context
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Login
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </GridItem>
              <GridItem>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </GridItem>
            </GridContainer>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Login
            </Button>
          </form>
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              Don't have an account?{' '}
              <Link component={RouterLink} to="/signup" underline="hover">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login; 