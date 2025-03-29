import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import {
  Person as PersonIcon,
  Work as WorkIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import styled from '@emotion/styled';

const GridContainer = styled.div`
  display: grid;
  gap: 24px;
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

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const theme = useTheme();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const quickActions = [
    {
      icon: <PersonIcon sx={{ fontSize: 40 }} />,
      title: 'Profile',
      description: 'View and edit your profile information',
      onClick: () => navigate('/profile'),
    },
    {
      icon: <WorkIcon sx={{ fontSize: 40 }} />,
      title: 'Jobs',
      description: 'Manage job postings and applications',
      onClick: () => navigate('/jobs'),
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
      title: 'Reports',
      description: 'View analytics and reports',
      onClick: () => navigate('/reports'),
    },
    {
      icon: <SettingsIcon sx={{ fontSize: 40 }} />,
      title: 'Settings',
      description: 'Configure your account settings',
      onClick: () => navigate('/settings'),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <GridContainer>
        {/* Welcome Section */}
        <GridItem>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
              color: 'white',
            }}
          >
            <Box>
              <Typography variant="h4" component="h1" gutterBottom>
                Welcome back, {user?.name}!
              </Typography>
              <Typography variant="subtitle1">
                Here's what's happening with your account today.
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
              sx={{ ml: 2 }}
            >
              Logout
            </Button>
          </Paper>
        </GridItem>

        {/* Quick Actions */}
        <GridItem>
          <Typography variant="h5" component="h2" gutterBottom>
            Quick Actions
          </Typography>
          <GridContainer>
            {quickActions.map((action, index) => (
              <GridItem key={index} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                  onClick={action.onClick}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {action.icon}
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {action.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {action.description}
                    </Typography>
                  </CardContent>
                </Card>
              </GridItem>
            ))}
          </GridContainer>
        </GridItem>

        {/* Recent Activity */}
        <GridItem>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Recent Activity
            </Typography>
            <Typography variant="body1" color="text.secondary">
              No recent activity to display.
            </Typography>
          </Paper>
        </GridItem>
      </GridContainer>
    </Container>
  );
};

export default Dashboard; 