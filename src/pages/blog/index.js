import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlogItem from './blogItem';

function TabPanel(props) {
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

TabPanel.propTypes = {
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

export default function Blog() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    AOS.init();

    return (
        <div className='blog_tabs'>
            <div class="main-container">
                <div className='blog-title'>
                    <h1>Blog</h1>
                    <ul>
                        <li>302 ta loyiha</li>
                        <li>212 ta rozi mijoz</li>
                    </ul>
                </div>
                <Box sx={{ bgcolor: '#F7F7F7', width: '100%' }}>
                    <AppBar position="static">
                        <Tabs
                            data-aos="fade-right" data-aos-duration="2000"
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Barchasi" {...a11yProps(0)} />
                            <Tab label="Sotuv" {...a11yProps(1)} />
                            <Tab label="Marketing" {...a11yProps(2)} />
                            <Tab label="Brending" {...a11yProps(3)} />
                            <Tab label="IT" {...a11yProps(4)} />
                            <Tab label="Menejment" {...a11yProps(5)} />
                            <Tab label="Boshqalar" {...a11yProps(6)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <div className='row'>
                                <BlogItem />
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <h1>rdetfyvghjn</h1>

                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <h1>rdetfyvghjn</h1>

                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            <h1>rdetfyvghjn</h1>

                        </TabPanel>
                        <TabPanel value={value} index={4} dir={theme.direction}>
                            <h1>rdetfyvghjn</h1>

                        </TabPanel>
                        <TabPanel value={value} index={5} dir={theme.direction}>
                            <h1>rdetfyvghjn</h1>

                        </TabPanel>
                        <TabPanel value={value} index={6} dir={theme.direction}>
                            <h1>rdetfyvghjn</h1>

                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </div>
        </div>
    );
}