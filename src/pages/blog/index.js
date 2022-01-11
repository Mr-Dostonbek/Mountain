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
import Blognot from './blogItem/blogNot';
import Contact from '../home/contact';

const data = [
    {
        id: 1,
        category: "sotuv",
        img: './assets/img/Blog/sotuv-1.png',
        title: "Muammolaringizni yechishning samarali formulasi",
        videoTime: "00:02:08",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 2,
        category: "sotuv",
        img: './assets/img/Blog/sotuv-2.png',
        title: "Mijozlar bilan ishlashdagi 4 muhim faktor | Behzod Esonov",
        videoTime: "00:09:00",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 3,
        category: "sotuv",
        img: './assets/img/Blog/sotuv-3.png',
        title: "LTV o'zi nima va uning foydalari?",
        videoTime: "00:02:38",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 4,
        category: "sotuv",
        img: './assets/img/Blog/sotuv-4.png',
        title: "Nega mendan sotib olishlari kerak?",
        videoTime: "00:01:37",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 5,
        category: "sotuv",
        img: './assets/img/Blog/sotuv-5.png',
        title: "Odamlar qachon qimmat sotib olishadi?",
        videoTime: "00:02:29",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 6,
        category: "brending",
        img: './assets/img/Blog/brending-1.png',
        title: "Brendda logotipning o'rni qanday?",
        videoTime: "00:02:58",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 7,
        category: "brending",
        img: './assets/img/Blog/brending-2.png',
        title: "Brend qanday yo'nalishlarda amalga oshiriladi?",
        videoTime: "00:01:46",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 8,
        category: "brending",
        img: './assets/img/Blog/brending-3.png',
        title: "Nega neyming jarayoni brend uchun muhim?",
        videoTime: "00:01:14",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 9,
        category: "brending",
        img: './assets/img/Blog/brending-4.png',
        title: "'Mockup' nima?",
        videoTime: "00:01:46",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 10,
        category: "brending",
        img: './assets/img/Blog/brending-5.png',
        title: "Brend - bu boshlang'ich qism!",
        videoTime: "00:01:11",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 11,
        category: "brending",
        img: './assets/img/Blog/brending-6.png',
        title: "Brending - bu kelajakka investitsiya qilish!",
        videoTime: "00:01:38",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 12,
        category: "it",
        img: './assets/img/Blog/it-1.png',
        title: "Sayt turlari va farqlari",
        videoTime: "00:02:32",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 13,
        category: "menejment",
        img: './assets/img/Blog/menejment-1.png',
        title: "Diqqatni jamlash - bu Allohning ne'mati!",
        videoTime: "00:00:45",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 14,
        category: "menejment",
        img: './assets/img/Blog/menejment-2.png',
        title: "Samarali haq to'lash haqida bilasizmi?",
        videoTime: "00:01:07",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 15,
        category: "marketing",
        img: './assets/img/Blog/sotuv-3.png',
        title: "Samarali haq to'lash haqida bilasizmi?",
        videoTime: "00:01:07",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 16,
        category: "marketing",
        img: './assets/img/Blog/sotuv-3.png',
        title: "Samarali haq to'lash haqida bilasizmi?",
        videoTime: "00:01:07",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 17,
        category: "marketing",
        img: './assets/img/Blog/menejment-2.png',
        title: "Samarali haq to'lash haqida bilasizmi?",
        videoTime: "00:01:07",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 18,
        category: "boshqalar",
        img: './assets/img/Blog/boshqalar-1.png',
        title: "Biznesda qilgan eng katta xatolarim",
        videoTime: "00:01:32",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 19,
        category: "boshqalar",
        img: './assets/img/Blog/boshqalar-2.png',
        title: "Biznes muvaffaqiyatining kaliti nimada?",
        videoTime: "00:00:26",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 20,
        category: "marketing",
        img: './assets/img/Blog/boshqalar-3.png',
        title: "Biznesda yetishmovchilikning oxiri bormi?",
        videoTime: "00:01:32",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 21,
        category: "boshqalar",
        img: './assets/img/Blog/boshqalar-4.png',
        title: "Tadbirkor uchun zaruriy ko'nikmalar",
        videoTime: "00:01:57",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 22,
        category: "boshqalar",
        img: './assets/img/Blog/boshqalar-5.png',
        title: "Tadborkorlar tomonidan yo'q qo'yilayotgan asosiy xatoliklar",
        videoTime: "00:08:21",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
    {
        id: 23,
        category: "boshqalar",
        img: './assets/img/Blog/boshqalar-6.png',
        title: "Narx raqobatidan qutilish mumkinmi?",
        videoTime: "00:01:41",
        videoURL: "https://www.youtube.com/watch?v=eFM03KuSzKc"
    },
]

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
        <div>
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
                                    {
                                        data.map((item) => {
                                            return (
                                                <BlogItem
                                                    img={item.img}
                                                    title={item.title}
                                                    videoURL={item.videoURL}
                                                    videoTime={item.videoTime}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div className='row'>
                                    {
                                        data.some(item => item.category === "sotuv")
                                            ? data.filter(item => item.category === "sotuv").map((sotuv, index) => {
                                                return (
                                                    <BlogItem
                                                        img={sotuv.img}
                                                        title={sotuv.title}
                                                        videoURL={sotuv.videoURL}
                                                        videoTime={sotuv.videoTime}
                                                    />
                                                )
                                            })
                                            : <Blognot />
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                                <div className='row'>
                                    {
                                        data.some(item => item.category === "marketing")
                                            ? data.filter(item => item.category === "marketing").map((sotuv, index) => {
                                                return (
                                                    <BlogItem
                                                        img={sotuv.img}
                                                        title={sotuv.title}
                                                        videoURL={sotuv.videoURL}
                                                        videoTime={sotuv.videoTime}
                                                    />
                                                )
                                            })
                                            : <Blognot />
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={3} dir={theme.direction}>
                                <div class="row">
                                    {
                                        data.some(item => item.category === "brending")
                                            ? data.filter(item => item.category === "brending").map((sotuv, index) => {
                                                return (
                                                    <BlogItem
                                                        img={sotuv.img}
                                                        title={sotuv.title}
                                                        videoURL={sotuv.videoURL}
                                                        videoTime={sotuv.videoTime}
                                                    />
                                                )
                                            })
                                            : <Blognot />
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={4} dir={theme.direction}>
                                <div class="row">
                                    {
                                        data.some(item => item.category === "it")
                                            ? data.filter(item => item.category === "it").map((sotuv, index) => {
                                                return (
                                                    <BlogItem
                                                        img={sotuv.img}
                                                        title={sotuv.title}
                                                        videoURL={sotuv.videoURL}
                                                        videoTime={sotuv.videoTime}
                                                    />
                                                )
                                            })
                                            : <Blognot />
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={5} dir={theme.direction}>
                                <div class="row">
                                    {
                                        data.some(item => item.category === "menejment")
                                            ? data.filter(item => item.category === "menejment").map((sotuv, index) => {
                                                return (
                                                    <BlogItem
                                                        img={sotuv.img}
                                                        title={sotuv.title}
                                                        videoURL={sotuv.videoURL}
                                                        videoTime={sotuv.videoTime}
                                                    />
                                                )
                                            })
                                            : <Blognot />
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={6} dir={theme.direction}>
                                <div class="row">
                                    {
                                        data.some(item => item.category === "boshqalar")
                                            ? data.filter(item => item.category === "boshqalar").map((sotuv, index) => {
                                                return (
                                                    <BlogItem
                                                        img={sotuv.img}
                                                        title={sotuv.title}
                                                        videoURL={sotuv.videoURL}
                                                        videoTime={sotuv.videoTime}
                                                    />
                                                )
                                            })
                                            : <Blognot />
                                    }
                                </div>
                            </TabPanel>
                        </SwipeableViews>
                    </Box>
                </div>
            </div>
            <Contact title="Yanada ko'p ma'lumot xohlaysizmi?" />
        </div>
    );
}