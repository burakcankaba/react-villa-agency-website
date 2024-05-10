import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./documentTabs.scss";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const DocumentTabs = () => {
  const location = useLocation();
  const findTabID = parseInt(location.search.split(":")[1]);
  const [value, setValue] = useState(findTabID ? findTabID : 0);
  const { t } = useTranslation()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
  <div className="documentTabs">
    <Container>
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label={t('covid_info')} {...a11yProps(0)} />
          <Tab label={t('official_holidays')} {...a11yProps(1)} selectionFollowsFocus />
          <Tab label={t('villa_rental_agreement')} {...a11yProps(2)} />
          <Tab label={t('guest_protection_coverage')} {...a11yProps(3)} />
          <Tab label={t('security_privacy_policy')} {...a11yProps(4)} />
          <Tab label={t('cancellation_refund_policy')} {...a11yProps(5)} />
          <Tab label={t('cookie_policy')} {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Covid-19 hayatımızın her anında yeni bir normal yaratıyor olsa da bu zor dönemde Hellovillam olarak misafirlerimizin her daim keyifli ve huzurlu bir tatil geçirmelerini sağlamak için gereken her şeyi yapıyoruz.

          Her zaman müşteri memnuniyetini ilk sıraya koyan politikalarımız ile bu dönemde de her zaman olduğu gibi sizlere hizmet vermeye devam ediyoruz. Villalarımızın hazırlanışından farklı dezenfeksiyon kurallarına kadar her noktada sağlığınızı ve memnuniyetinizi önemsiyoruz.

          Sağlıklı bir tatil geçirmeniz için gereken her türlü önlemi aldığımız kiralık villalarımızda Hellovillam güvencesi ile konaklarken, tatil danışmanınız sadece bir telefon uzağınızda, her zaman yanınızda olacak.
          Covid-19 hayatımızın her anında yeni bir normal yaratıyor olsa da bu zor dönemde Hellovillam olarak misafirlerimizin her daim keyifli ve huzurlu bir tatil geçirmelerini sağlamak için gereken her şeyi yapıyoruz.

          Her zaman müşteri memnuniyetini ilk sıraya koyan politikalarımız ile bu dönemde de her zaman olduğu gibi sizlere hizmet vermeye devam ediyoruz. Villalarımızın hazırlanışından farklı dezenfeksiyon kurallarına kadar her noktada sağlığınızı ve memnuniyetinizi önemsiyoruz.

          Sağlıklı bir tatil geçirmeniz için gereken her türlü önlemi aldığımız kiralık villalarımızda Hellovillam güvencesi ile konaklarken, tatil danışmanınız sadece bir telefon uzağınızda, her zaman yanınızda olacak.
          Covid-19 hayatımızın her anında yeni bir normal yaratıyor olsa da bu zor dönemde Hellovillam olarak misafirlerimizin her daim keyifli ve huzurlu bir tatil geçirmelerini sağlamak için gereken her şeyi yapıyoruz.

          Her zaman müşteri memnuniyetini ilk sıraya koyan politikalarımız ile bu dönemde de her zaman olduğu gibi sizlere hizmet vermeye devam ediyoruz. Villalarımızın hazırlanışından farklı dezenfeksiyon kurallarına kadar her noktada sağlığınızı ve memnuniyetinizi önemsiyoruz.

          Sağlıklı bir tatil geçirmeniz için gereken her türlü önlemi aldığımız kiralık villalarımızda Hellovillam güvencesi ile konaklarken, tatil danışmanınız sadece bir telefon uzağınızda, her zaman yanınızda olacak.
          Covid-19 hayatımızın her anında yeni bir normal yaratıyor olsa da bu zor dönemde Hellovillam olarak misafirlerimizin her daim keyifli ve huzurlu bir tatil geçirmelerini sağlamak için gereken her şeyi yapıyoruz.

          Her zaman müşteri memnuniyetini ilk sıraya koyan politikalarımız ile bu dönemde de her zaman olduğu gibi sizlere hizmet vermeye devam ediyoruz. Villalarımızın hazırlanışından farklı dezenfeksiyon kurallarına kadar her noktada sağlığınızı ve memnuniyetinizi önemsiyoruz.

          Sağlıklı bir tatil geçirmeniz için gereken her türlü önlemi aldığımız kiralık villalarımızda Hellovillam güvencesi ile konaklarken, tatil danışmanınız sadece bir telefon uzağınızda, her zaman yanınızda olacak.
          Covid-19 hayatımızın her anında yeni bir normal yaratıyor olsa da bu zor dönemde Hellovillam olarak misafirlerimizin her daim keyifli ve huzurlu bir tatil geçirmelerini sağlamak için gereken her şeyi yapıyoruz.

          Her zaman müşteri memnuniyetini ilk sıraya koyan politikalarımız ile bu dönemde de her zaman olduğu gibi sizlere hizmet vermeye devam ediyoruz. Villalarımızın hazırlanışından farklı dezenfeksiyon kurallarına kadar her noktada sağlığınızı ve memnuniyetinizi önemsiyoruz.

          Sağlıklı bir tatil geçirmeniz için gereken her türlü önlemi aldığımız kiralık villalarımızda Hellovillam güvencesi ile konaklarken, tatil danışmanınız sadece bir telefon uzağınızda, her zaman yanınızda olacak.
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
    </Container>
  </div>
  )
}

export default DocumentTabs