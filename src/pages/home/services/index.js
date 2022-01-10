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
import ServicesItem1 from './servicesItem1';
import ServicesItem2 from './servicesItem2';
import ServicesItem3 from './servicesItem3';
import ServicesItem4 from './servicesItem4';
import ServicesItem5 from './servicesItem5';
import AOS from 'aos';
import 'aos/dist/aos.css'

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

export default function FullWidthTabs() {
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
        <div className='services_tabs'>
            <div class="main-container">
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
                            <Tab label="Logotip" {...a11yProps(0)} />
                            <Tab label="UX/UI dizayn" {...a11yProps(1)} />
                            <Tab label="Brending" {...a11yProps(2)} />
                            <Tab label="Vebsayt" {...a11yProps(3)} />
                            <Tab label="CRM va ERP tizim" {...a11yProps(4)} />
                            <Tab label="Qadoq dizayni" {...a11yProps(5)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <ServicesItem1
                                src="/assets/img/services/services-1.png"
                                title='Logotip xizmati'
                                firstText="Logotip – insonlarni ma'lum bir brend bilan bog'laydigan savdo belgisidir. Logotip mavhum belgilar to'plami yoki shunchaki chiroyli tasvirgina emas, balki brendning yuzi hisoblanadi. Logotip murakkab bo'lishi, faoliyat sohasi haqida gapirishi shart emas.Yaxshi tayyorlangan logotip orqali Siz: "
                                checked=" kompaniyangizni boshqa  raqobatchi kompaniyalardan ajralib turishga yordam berasiz;"
                                checked1=" mulkingizning huquqiy kafolatini ta'minlaysiz;"
                                checked2=" mijozlaringizning ishonchini oqlaysiz;"
                                checked3=" kompaniyangiz reklamasi rivojiga hissa qo'shasiz;"
                                checked4=" biznesingiz rivojiga yordam berasiz."
                            />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <ServicesItem2
                                src="/assets/img/services/services-2.png"
                                title='UX/UI dizayn xizmati'
                                firstText="Dasturiy ta'minotda UX/UI dizayn turlari muhim o'rin egallaydi."
                                secondText="UX - User experience (foydalanuvchi tajribasi) ma'nosini anglatib,  foydalanuvchilarga mazmunli va kerakli bo'lgan tajribani taqdim etadigan dizayn jarayoni hisoblanadi. Bu mahsulotni sotib olish va integratsiya qilishning butun jarayonini, shu jumladan brendlash, dizaynning foydalanishga yaroqliligi va funksiya jihatlarini loyihalashni o'z ichiga oladi"
                                thirdText="UI - User interface 'foydalanuvchi interfeysi', mahsulot foydalanuvchilar uchun jozibali va qulay tarzda taqdim etilishi uchun javob beradigan xizmat turi. UI dizayneri sifatida biz nafaqat foydalanuvchilarga yoqadigan dizayn, balki mahsulotingiz interfeysi orqali brendni to'liq yo'lga qo'yib beramiz dizayndagi ranglarning shakli, o'lchamlari va joylashishini, shriftlarning nomlari va hajmini aks ettiramiz."
                                fourText="Qisqa qilib aytganda foydalanuvchilarga qulaylik va imkoniyatlar yaratishni UX - dizaynerlik, uning qanday shrift, rasm va ranglarda aks etishini UI - dizaynerlik xizmati  bajaradi"
                            />
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <ServicesItem3
                                src="/assets/img/services/services-3.png"
                                title='Brending xizmati'
                                firstText="Brending - mijozlar ongida g'oyalar, qadriyatlar va hissiyotlarni yaratishdir. Biz quyidagi yo'nalishdagi brending xizmatlarini taklif qilamiz:"
                                checked=" neyming "
                                checked1=" brandbook"
                                checked2=" qadoq dizaynini yaratish"
                                secondText="Bularning barchasini mijoz to'ldirib bergan brif ma'lumotlaridan kelib chiqib tayyorlaymiz. Loyiha mijoz tomonidan tasdiqlangandan so'ng Corel draw va psd variantlarini tashlab beramiz. Mijoz o'z navbatida ushbu elementlardan bemalol istalgan yerda ishlatish imkoniga ega bo'ladi"
                                thirdText="Brending xizmatidan foydalanish orqali Siz aylanma mablag' va bozordagi daromadingizni ko'paytirishga hamda tikkan investitsiyangizni tezroq qaytarib olishga erishasiz."
                            />
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                            <ServicesItem4
                                src="/assets/img/services/services-4.png"
                                title='Vebsayt xizmati'
                                firstText="Sayt yordamida iste'molchilaringiz kompaniyangiz xizmatlari, afzalliklari va boshqa ma'lumotlarga qulay"
                            />
                        </TabPanel>
                        <TabPanel value={value} index={4} dir={theme.direction}>
                            <ServicesItem5
                                src="/assets/img/services/services-5.png"
                                title='CRM va ERP tizim xizmati'
                                firstText="Sayt yordamida iste'molchilaringiz kompaniyangiz xizmatlari, afzalliklari va boshqa ma'lumotlarga qulay"
                            />
                        </TabPanel>
                        <TabPanel value={value} index={5} dir={theme.direction}>
                            <ServicesItem5
                                src="/assets/img/services/services-6.png"
                                title='Qadoq dizayni xizmati'
                                firstText="Sayt yordamida iste'molchilaringiz kompaniyangiz xizmatlari, afzalliklari va boshqa ma'lumotlarga qulay"
                            />
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </div>
        </div>
    );
}