import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ServicesItem from './servicesItem';
import { servicesData } from './servicesItem/data';


const Services = () => {
    return (
        <Tabs className="overflow-hidden">
            
            <TabList className="w-100 d-flex justify-content-between flex-nowrap">
                <Tab>Logotib</Tab>
                <Tab>UX/UI dizayn</Tab>
                <Tab>Brending</Tab>
                <Tab>Vebsayt</Tab>
                <Tab>CRM va ERP tizim</Tab>
                <Tab>Qadoq dizayni</Tab>
            </TabList>

            <TabPanel>
                <ServicesItem src="" title="Logotip xizmati" checked="kompaniyangizni boshqa  raqobatchi kompaniyalardan ajralib turishga yordam berasiz;"  />
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 4</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 5</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 6</h2>
            </TabPanel>
        </Tabs>
    );
}

export default Services;
