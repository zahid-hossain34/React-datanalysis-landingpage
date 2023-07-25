import React from 'react';
import '../App.css'
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Table from '../components/Table';
import Social from '../components/Social';
import Information from '../components/Information';
import ChartAnalysis from '../components/ChartAnalysis';
import MediyaDataTable from '../components/MediaDataTable';
import Footer from '../components/Footer';
const socialtableImgSrc = require('../assets/social-table.png');

function Layout() {
    return (
        <div className="">
            <Header />
            <HeroSection />
            <Table socialtableImgSrc= {socialtableImgSrc} >
            <p className="w-[1091px] h-[127px] text-center text-zinc-900 text-[51px] font-medium leading-[64.77px]">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit</p>
            </Table>
            <Social />
            <Information />
            <ChartAnalysis />
            <MediyaDataTable />
            <Footer />
        </div>
    );
}
export default Layout;