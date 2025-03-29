import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { Work as WorkIcon, People as PeopleIcon, Assessment as AssessmentIcon } from '@mui/icons-material';
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

const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  display: block;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const features = [
    {
      icon: <WorkIcon sx={{ fontSize: 40 }} />,
      title: 'Job Management',
      description: 'Efficiently manage job postings, applications, and hiring processes.',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: 'Candidate Tracking',
      description: 'Track and manage candidates throughout the recruitment process.',
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
      title: 'Performance Analytics',
      description: 'Get insights into your hiring process with detailed analytics.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container>
          <GridContainer>
            <GridItem xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Welcome to EmployWise
              </Typography>
              <Typography variant="h5" gutterBottom>
                Your Complete HR Management Solution
              </Typography>
              <Typography variant="body1" paragraph>
                Streamline your HR processes, manage employees efficiently, and make data-driven decisions.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/login')}
                sx={{ mt: 2 }}
              >
                Get Started
              </Button>
            </GridItem>
            <GridItem xs={12} md={6}>
              <HeroImage
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="HR Management"
              />
            </GridItem>
          </GridContainer>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Why Choose EmployWise?
        </Typography>
        <GridContainer>
          {features.map((feature, index) => (
            <GridItem xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Box textAlign="center">
            <Typography variant="h3" component="h2" gutterBottom>
              Ready to Transform Your HR Management?
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Join thousands of companies already using EmployWise
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/login')}
              sx={{ mt: 2 }}
            >
              Start Free Trial
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 