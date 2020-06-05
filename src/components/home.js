import React from 'react';
import './home.css'
import HeaderImg from './image/undraw_segment_analysis_bdn4.svg'
import AboutImg from './image/undraw_dev_focus_b9xo.svg';
import ContactImg from './image/undraw_personal_information_962o.svg';


import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
const dataPrice = [
    {
        TierName : 'Basic',
        Tier : [
            'Mencatat Barang Masuk',
            'Mencatat Barang Keluar',
            'Mencatat Hasil keuntungan'
        ],
        color : '#EBF7FF'
    },
    {
        TierName : 'Business',
        Tier : [
            'Mencatat Barang Masuk dan Keluar',
            'Mencatat keuntungan',
            'Dapat Menganalisa Hasil Penjualan dengan CHART',
            'Support 7x24 Jam'
        ],
        color : '#EAFFED'

    },
    {
        TierName : 'Entrepreneur',
        Tier : [
            'Mencatat Barang Masuk dan Keluar',
            'Mencatat keuntungan',
            'Dapat Menganalisa Hasil Penjualan dengan CHART',
            'Support 7x24 Jam',
            'Export data ke Excel',
            'AI Prediksi Penghasilan'
        ],
        color : '#FFF1EA'

    }
]

class Home extends React.Component {
    renderPricing = () => {
        return dataPrice.map((val) => {
            return(
                <div className='col-xl-4 ' style={{marginBottom : '20px'}}>
                    <div className='Pricing-Card' style={{background : val.color}}>
                        <div className='Pricing-Card-Content'>
                            <h1>{val.TierName}</h1>
                                {val.Tier.map((val) => {
                                    return (
                                        <div className='Pricing-Li'><IoMdCheckmarkCircleOutline color='green'/>&nbsp;{val}</div>
                                    )
                                })}

                        </div>
                    </div>
                </div>
            )
        })
    }
    render() { 
        return (  
            <div className='Home-Container'>
                <section className='Header-Container'>
                    <div className='Navbar-Container'>
                        <ul>
                            <li style={{float : 'left'}}><a>Logo</a></li>
                            <li className='Nav-Resp'><a>Contact</a></li>
                            <li className='Nav-Resp'><a>Pricing</a></li>
                            <li className='Nav-Resp'><a>About</a></li>
                            <li className='Menu-Bars'><a>XX</a></li>
                        </ul>
                    </div>
                    <div className='Header-Content'>
                        <div className='row p-0 m-0'>
                            <div className='col-xl-6 d-flex justify-content-center'>
                                <img src={HeaderImg} className='Header-Image'/>
                            </div>
                            <div className='col-xl-6  d-flex justify-content-center'>
                                <div className='Header-Txt m-auto'>
                                    <h1 >Jasa Pengembangan Software</h1>
                                    <p>Mempermudah anda dalam menjalankan bisnis serta memperhemat biaya produksi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='About-Container d-flex justify-content-center'>
                    <div className='container m-auto'>
                    <div className='row p-0 m-0'>
                        <div className='col-xl-6 d-flex justify-content-center'>
                            <div className='About-Txt'>
                                <h1>About Us</h1>
                                <p>Kami adalah Perusahaan Pengembang Software untuk mempermudah anda dalam menjalankan bisnis</p>
                            </div>
                        </div>
                        <div className='col-xl-6 d-flex justify-content-center'>
                            <img src={AboutImg} className='About-Img'/>
                        </div>
                    </div>
                    </div>
                </section>
                <section className='Pricing-Container d-flex justify-content-center'>
                        <div className='container m-auto'>
                            <div className='row'>
                                {this.renderPricing()}
                            </div>
                        </div>
                </section>
                <section className='Contact-Container'>
                    <div className='container m-auto'>
                    <div className='row p-0 m-0'>
                        <div className='col-xl-6 d-flex justify-content-center'>
                            <img src={ContactImg} className='Contact-Img'/>
                        </div>
                        <div className='col-xl-6 d-flex justify-content-center'>
                            <div className='Contact-Txt'>
                                <h1>Contact Us</h1>
                                <p>Email : fiqrynh29@gmail.com</p>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;