import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PersonIcon from '@mui/icons-material/Person';

function Papers(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Papers.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [openItems, setOpenItems] = React.useState({});

  const categories = {
    Computer_Science: [
        {
            id: 1,
            title: 'Ishwari Singh Rajput',
            items: [
              {
                id: '1-1',
                title: 'NSGA‐II‐XGB: Meta‐heuristic feature selection with XGBoost framework for diabetes prediction',
                link: 'https://doi.org/10.1002/cpe.7123'
              },
              {
                id: '1-2',
                title: 'Federated learning: Applications, Security hazards and Defense measures',
                link: 'https://ieeexplore.ieee.org/abstract/document/10110075'
              },
              {
                id: '1-3',
                title: 'A transfer learning-based brain tumor classification using magnetic resonance images',
                link: 'https://link.springer.com/article/10.1007/s11042-023-16143-w'
              },
              {
                id: '1-4',
                title: 'Advances in Medical Imaging: Using Convolutional Neural Networks for White Blood Cell Identification',
                link: 'https://doi.org/10.5815/ijigsp.2024.01.08'
              },
              {
                id: '1-5',
                title: 'Sine Cosine Algorithm-Based Feature Selection for Improved Machine Learning Models in Polycystic Ovary Syndrome Diagnosis',
                link: 'https://doi.org/10.1007/s11042-024-18213-z'
              },
              {
                id: '1-6',
                title: 'An autoencoder-based deep learning model for solving the sparsity issues of Multi-Criteria Recommender System',
                link: ''
              }
        ]
      },
      {
        id: 2,
        title: "Sonam Tyagi",
        items: [
            {
                id: '2-1',
                title: 'Federated learning: Applications, Security hazards and Defense measures',
                link: 'https://ieeexplore.ieee.org/abstract/document/10110075'
              },
              {
                id: '2-2',
                title: 'A transfer learning-based brain tumor classification using magnetic resonance images',
                link: 'https://link.springer.com/article/10.1007/s11042-023-16143-w'
              },
              {
                id: '2-3',
                title: 'Advances in Medical Imaging: Using Convolutional Neural Networks for White Blood Cell Identification',
                link: 'https://doi.org/10.5815/ijigsp.2024.01.08'
              },
              {
                id: '2-4',
                title: 'A Comparative Exploration of Denoising and Enhancement Techniques in Breast Cancer Microscopic Imaging',
                link: ''
              },
              {
                id: '2-5',
                title: 'Sine Cosine Algorithm-Based Feature Selection for Improved Machine Learning Models in Polycystic Ovary Syndrome Diagnosis',
                link: 'https://doi.org/10.1007/s11042-024-18213-z'
              }
        ]
      },
      {
        id: 3,
        title: "Dr Mukesh K Sahu",
        items: [
          {
            id: '3-1',
            title: 'Structural and photoluminescent features of Eu3+ activated single-phase niobate phosphor for lighting applications',
            link: 'https://ceramics.onlinelibrary.wiley.com/doi/abs/10.1111/ijac.14479'
          },
          {
            id: '3-2',
            title: 'Structural, thermal, and luminescence kinetics of Sr4Nb2O9 phosphor doped with Dy3+ ions for cool w-LED applications',
            link: 'https://link.springer.com/article/10.1007/s10854-023-10055-z'
          }
        ]
      },   
      {
        id: 4,
        title: "Kuljinder Singh Bumrah",
        items: [
          {
            id: '4-1',
            title: 'A Comparison of various methodologies in AI and ML for stock market prediction',
            link: 'https://harbinengineeringjournal.com/index.php/journal/article/view/439'
          },
          {
            id: '4-2',
            title: 'An Efficient Approach to Forecasting the NIFTY-50 Indian Stock Markets Daily Closing Price with Artificial Neural Networks',
            link: 'https://ijritcc.org/index.php/ijritcc/article/view/9472'
          },
        ]
      },   
      {
        id: 5,
        title: "Richa Pandey",
        items: [
          {
            id: '5-1',
            title: 'Role of Technology in the Media and Entertainment Sector',
            link: 'https://ieeexplore.ieee.org/document/10212145'
          },
          {
            id: '5-2',
            title: 'Customization of Bookkeeping system for Blockchain System Analysis: A Review',
            link: 'https://ieeexplore.ieee.org/document/9995992'
          },
          {
            id: '5-3',
            title: 'Humidity Prediction in Crop Monitoring System through Machine Learning and web based application in finance and Smart Agriculture 4.0',
            link: 'https://ieeexplore.ieee.org/document/10059448'
          },
          {
            id: '5-4',
            title: 'Federated learning: Applications, Security hazards and Defense measures',
            link: 'https://ieeexplore.ieee.org/abstract/document/10110075'
          },
          {
            id: '5-5',
            title: 'A transfer learning-based brain tumor classification using magnetic resonance images',
            link: 'https://link.springer.com/article/10.1007/s11042-023-16143-w'
          },
          
        ]
      },   
      {
        id: 6,
        title: "Mayurika Joshi",
        items: [
          {
            id: '6-1',
            title: 'Live Virtual Machine Migration Techniques in Cloud Computing: A Review',
            link: 'https://ieeexplore.ieee.org/document/10263955'
          }
        ]
      },   
      {
        id: 7,
        title: "Sujata Negi Thakur",
        items: [
          {
            id: '7-1',
            title: 'Concepts, Approaches and Challenges in a Study of Sentiment Analysis',
            link: 'https://ieeexplore.ieee.org/abstract/document/10402287'
          },
          {
            id: '7-2',
            title: 'Examining the impact of Cloud Computing on Indian Education',
            link: 'https://ieeexplore.ieee.org/abstract/document/10402253'
          },
          {
            id: '7-3',
            title: 'Internet traffic load during Covid-19 pandemic: ISBN 9781032367231',
            link: 'https://doi.org/10.1201/9781003333500'
          },
          {
            id: '7-4',
            title: 'A Comprehensive Study on Blockchain: Transforming the World',
            link: 'https://ieeexplore.ieee.org/document/10101303'
          }
        ]
      },   
      {
        id: 8,
        title: "Mukta Jukaria",
        items: [
          {
            id: '2-1',
            title: 'Vector Auto-Regression Based Predictive model for Smart Meter',
            link: 'https://drive.google.com/file/d/15xCY2-hviMCq9XXkwIV_5kBaTYDjM5lq/view?usp=sharing'
          },
          {
            id: '2-2',
            title: 'A transfer learning-based brain tumor classification using magnetic resonance images',
            link: 'https://drive.google.com/file/d/1mThicK9I3MYEDB_XOuSmmaj_8QK1JQ7U/view?usp=sharing'
          },
          {
            id: '2-3',
            title: 'Efficient Centroid Based Distance Monitoring System Using Deep Learning',
            link: 'https://ieeexplore.ieee.org/document/10110060'
          },
          {
            id: '2-4',
            title: 'Vector Auto-regression based Predictive model for Smart Meter',
            link: 'https://ieeexplore.ieee.org/abstract/document/10110196'
          },
          {
            id: '2-5',
            title: 'Efficient centroid based distance monitoring system using deep learning',
            link: 'https://ieeexplore.ieee.org/document/10110060'
          }
        ]
      },  
      {
        id: 9,
        title: "Dolly Sharma",
        items: [
          {
            id: '9-1',
            title: 'Identification of Height and Gender Using Deep Learning Application',
            link: 'https://link.springer.com/chapter/10.1007/978-981-99-8135-9_25'
          },
          {
            id: '9-2',
            title: 'Enhancement of Edge Security using Dynamic Load Balancing Algorithm for 5G Cloud Computing Network',
            link: 'https://link.springer.com/chapter/10.1007/978-981-99-8135-9_25'
          }
        ]
      },  
      {
        id: 10,
        title: "Dr. Manisha Koranga",
        items: [
          {
            id: '10-1',
            title: '5G Cityscape Unleashing Seamless Connectivity for Smart Urban Evolution',
            link: 'https://drive.google.com/file/d/1GK9iuGy4C3Q2-IKOBDeejLdI4xwcKJ1V/view?usp=share_link'
          }
        ]
      },  
      {
        id: 11,
        title: "Diwakar Upadhyay",
        items: [
          {
            id: '11-1',
            title: 'Fake Product Detection Using Ethereum Blockchain And SHA-256 Algorithm : Paper Id 169',
            link: 'https://icacit.in/index.php/conference-schedule/'
          },
          {
            id: '11-2',
            title: 'Enhancing Recommender Systems to alleviate data sparsity and the Cold Start Problem',
            link: 'https://ieeexplore.ieee.org/document/10428531'
          }
        ]
      },  
      {
        id: 12,
        title: "Dr. Vipin chandra Kuraie",
        items: [
          {
            id: '2-1',
            title: 'Federated learning: Applications, Security hazards and Defense measures',
            link: 'https://ieeexplore.ieee.org/abstract/document/10110075'
          },
          {
            id: '2-2',
            title: 'A transfer learning-based brain tumor classification using magnetic resonance images',
            link: 'https://link.springer.com/article/10.1007/s11042-023-16143-w'
          }
        ]
      },  
      {
        id: 13,
        title: "Anuj Kumar",
        items: [
          {
            id: '2-1',
            title: 'Federated learning: Applications, Security hazards and Defense measures',
            link: 'https://ieeexplore.ieee.org/abstract/document/10110075'
          },
          {
            id: '2-2',
            title: 'A transfer learning-based brain tumor classification using magnetic resonance images',
            link: 'https://link.springer.com/article/10.1007/s11042-023-16143-w'
          }
        ]
      },  
      {
        id: 14,
        title: "Dr. Gulbir Singh",
        items: [
          {
            id: '14-1',
            title: 'Internet of Things-Based Devices in Agriculture 4.0–Wireless Sensor and Actuators Networks',
            link: ''
          },
          {
            id: '14-2',
            title: 'Internet of Things based Agribot for smart farming and farm monitoring',
            link: ''
          },
          {
            id: '14-1',
            title: 'Federated learning: Applications, Security hazards and Defense measures',
            link: ''
          },
          {
            id: '14-1',
            title: 'Federated learning: Applications, Security hazards and Defense measures',
            link: ''
          },
          {
            id: '14-1',
            title: 'Federated learning: Applications, Security hazards and Defense measures',
            link: ''
          },
          {
            id: '14-1',
            title: 'Federated learning: Applications, Security hazards and Defense measures',
            link: 'https://ieeexplore.ieee.org/abstract/document/10110075'
          },
          {
            id: '14-1',
            title: 'Federated learning: Applications, Security hazards and Defense measures',
            link: 'https://ieeexplore.ieee.org/abstract/document/10110075'
          },
          {
            id: '14-1',
            title: 'Federated learning: Applications, Security hazards and Defense measures',
            link: 'https://ieeexplore.ieee.org/abstract/document/10110075'
          }
        ]
      },  {
        id: 15,
        title: "Dr. M. C. Lohani",
        items: [
          {
            id: '15-1',
            title: 'Comparative Analysis of Deep learning Models for Various Optimizer Embedded with Gradient Centralization',
            link: 'https://ijisae.org/index.php/IJISAE/article/view/4768'
          }
        ]
      },  
    ],
    Management: [
      {
        id: 1,
        title: 'Dr Anil Kumar',
        items: [
          {
            id: '3-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link1'
          },
          {
            id: '3-2',
            title: 'Paper Title 2',
            link: 'https://example.com/link2'
          },
          {
            id: '3-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link1'
          },
          {
            id: '3-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link1'
          },
          {
            id: '3-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link1'
          },
          {
            id: '3-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link1'
          }, {
            id: '3-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link1'
          },
          {
            id: '3-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link1'
          }
        ]
      },
      {
        id: 2,
        title: "Dr. Udit Kumar Pandey",
        items: [
          {
            id: '4-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link3'
          },
          {
            id: '4-2',
            title: 'Paper Title 2',
            link: 'https://example.com/link4'
          },
          {
            id: '4-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link3'
          },
          {
            id: '4-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link3'
          },
          {
            id: '4-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link3'
          },
          {
            id: '4-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link3'
          },
          {
            id: '4-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link3'
          },
          {
            id: '4-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link3'
          },
          {
            id: '4-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link3'
          },
          {
            id: '4-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link3'
          } 
        ]
      }
    ],
    Economics: [
      {
        id: 1,
        title: 'Dr Pawan Deep Singh',
        items: [
          {
            id: '5-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link5'
          },
          {
            id: '5-2',
            title: 'Paper Title 2',
            link: 'https://example.com/link6'
          }
        ]
      },
      {
        id: 2,
        title: "Dr Rahul Sharma",
        items: [
          {
            id: '6-1',
            title: 'Paper Title 1',
            link: 'https://example.com/link7'
          },
          {
            id: '6-2',
            title: 'Paper Title 2',
            link: 'https://example.com/link8'
          }
        ]
      }
    ],
    Mass_Communication: [
        {
          id: 1,
          title: 'Ritika Sanwal ',
          items: [
            {
              id: '5-1',
              title: 'Paper Title 1',
              link: 'https://example.com/link5'
            },
            {
              id: '5-2',
              title: 'Paper Title 2',
              link: 'https://example.com/link6'
            }
          ]
        },
        {
          id: 2,
          title: "Utkarsh Misra",
          items: [
            {
              id: '6-1',
              title: 'Paper Title 1',
              link: 'https://example.com/link7'
            },
            {
              id: '6-2',
              title: 'Paper Title 2',
              link: 'https://example.com/link8'
            }
          ]
        }
      ],
      English: [
        {
            id: 1,
            title: 'To be added',
            items: [
              {
                id: '5-1',
                title: 'No members yet',
                link: ''
              },
            ]
          }
      ],
      Hotel_Management: [
        {
          id: 1,
          title: 'Puneet Singh Sabharwal',
          items: [
            {
              id: '5-1',
              title: 'Not yet Published',
              link: ''
            },
           
          ]
        }
      ],
      Allied_Science: [
        {
          id: 1,
          title: 'To be added',
          items: [
            {
              id: '5-1',
              title: 'No members yet',
              link: ''
            },
          ]
        }
      ],
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (id) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [id]: !prevOpenItems[id]
    }));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '30vh' }}>
      <Box sx={{ bgcolor: 'background.paper', width: '80%', marginBottom: '10px', marginTop: '30px' }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="full width tabs example"
          >
            {Object.keys(categories).map((category, index) => (
              <Tab label={category.replace('_', ' ')} {...a11yProps(index)} key={index} />
            ))}
          </Tabs>
        </AppBar>

        {Object.values(categories).map((posts, index) => (
          <Papers value={value} index={index} dir={theme.direction} key={index}>
            <List
              sx={{ width: '100%', bgcolor: 'background.paper' }}
              component="nav"
            >
              {posts.map((post) => (
                <React.Fragment key={post.id}>
                  <ListItemButton onClick={() => handleClick(post.id)}>
                  <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
                    <ListItemText primary={post.title} />
                    {openItems[post.id] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openItems[post.id]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {post.items.map((nestedItem) => (
                        <ListItemButton
                          key={nestedItem.id}
                          component="a"
                          href={nestedItem.link}
                          target="_blank"
                          sx={{ pl: 4 }}
                        >
                             <ListItemIcon>
                <AttachFileIcon />
              </ListItemIcon>
                          <ListItemText primary={nestedItem.title} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ))}
            </List>
          </Papers>
        ))}
      </Box>
    </div>
  );
}
