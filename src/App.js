import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/128/684/684908.png' className='LocImage' />
        </div>
        <div className='Addressdiv'>
          <span>Harhwa fhatak ,Jaipur,Rajasthan</span>
        </div>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/128/1182/1182718.png' className='LocImage' />
        </div>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/128/4290/4290854.png' className='LocImage' />
        </div>
      </div>
      <div className='Header1'>
        <div className='InputSearch'>
          <img src='https://cdn-icons-png.flaticon.com/128/751/751381.png' className='LocImage' style={{ width: "20px", height: "20px", alignSelf: "center", justifyContent: "center", alignContent: "center" }} />
          <input type="text" placeholder='Search for Products' className='Input' />
        </div>
        <div>
          <img src='https://cdn-icons-png.flaticon.com/128/2282/2282210.png' className='LocImage' />
        </div>
      </div>
      <div className='MainDiv'>
        <div>
          <img src='https://i.ytimg.com/vi/fsM7CzEVAaU/maxresdefault.jpg' className='ProImage' />
        </div>
        <div className='Features' style={{ marginTop: "5%" }}>
          <div className='AllInfo'>
            <img src='https://cdn-icons-png.flaticon.com/128/7732/7732382.png' className='LocImage' />
            <p className='ParaDetails'>Mobile recharge</p>
          </div>
          <div className='AllInfo'>
            <img src='https://cdn-icons-png.flaticon.com/128/2593/2593966.png' className='LocImage' />
            <p className='ParaDetails'>DTH</p>
          </div>
          <div className='AllInfo'>
            <img src='https://cdn-icons-png.flaticon.com/128/1490/1490817.png' className='LocImage' />
            <p className='ParaDetails'>Loans</p>
          </div>
          <div className='AllInfo'>
            <img src='https://cdn-icons-png.flaticon.com/128/1378/1378593.png' className='LocImage' />
            <p className='ParaDetails'>Promotion</p>
          </div>
        </div>
        <div className='Features'>
          <div className='AllInfo'>
            <img src='https://cdn-icons-png.flaticon.com/128/2965/2965879.png' className='LocImage' />
            <p className='ParaDetails'>News</p>
          </div>
          <div className='AllInfo'>
            <img src='https://cdn-icons-png.flaticon.com/128/3959/3959542.png' className='LocImage' />
            <p className='ParaDetails'>Blog</p>
          </div>
          <div className='AllInfo'>
            <img src='https://cdn-icons-png.flaticon.com/128/3688/3688609.png' className='LocImage' />
            <p className='ParaDetails'>Jobs</p>
          </div>
          <div className='AllInfo'>
            <img src='https://cdn-icons-png.flaticon.com/128/2546/2546749.png' className='LocImage' />
            <p className='ParaDetails'>Feedback</p>
          </div>
        </div>
        <div className='PromoShareDiv'>
          <div className='PromoShareDivH3'>Popular Service Products</div>
        </div>
        <div className='PromoShareDiv'>
          <div className='PromoShareDivH3'>All Popular Service Providers</div>
        </div>
        <div className='NeedsDiv'>
          Cleaning & Household Needs
        </div>
        <div style={{ height: "1px", border: "1px solid darkgrey", margin: "auto", width: "auto", width: "75%", backgroundColor: "grey", marginTop: "2%" }}></div>
        <div className='MainDivHouseHoldDiv'>
          <div>
            <img src='https://m.media-amazon.com/images/I/61CygM0N0TL._SL1100_.jpg' className='HouseProImg' />
            <div>Surf Excel</div>
          </div>
          <div>
            <img src='https://newassets.apollo247.com/pub/media/catalog/product/s/u/sur0070_2.jpg' className='HouseProImg' />
            <div>Bar</div>
          </div>
          <div>
            <img src='https://www.neareshop.com/wp-content/uploads/2022/10/Surf-Excel-Active-Hygiene-Detergent-Powder-500-gm.jpg' className='HouseProImg' />
            <div>Liquid</div>
          </div>
        </div>

        <div className='NeedsDiv'>
          Construction
        </div>
        <div style={{ height: "1px", border: "1px solid darkgrey", margin: "auto", width: "auto", width: "75%", backgroundColor: "grey", marginTop: "2%" }}></div>
        <div className='MainDivHouseHoldDiv'>
          <div style={{ width: "31%" }}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/01/Brick.jpg' className='HouseProImg' />
            <div>Bricks</div>
          </div>
          <div style={{ width: "31%" }}>
            <img src='https://5.imimg.com/data5/SELLER/Default/2021/5/AT/HU/CU/110050461/morang-sand-500x500.jpg' className='HouseProImg' />
            <div>Mud</div>
          </div>
          <div style={{ width: "31%" }}>
            <img src='https://5.imimg.com/data5/ZF/QP/DB/GLADMIN-40414768/acc-gold-water-shield-500x500-500x500.png' className='HouseProImg' />
            <div>ACC</div>
          </div>
        </div>
        <div className='PromoShareDiv'>
          <div className='PromoShareDivH3'> Service we provide</div>
        </div>
        <div className='MainDIvServiceDiv'>
          <div className='Somediv'>
            <img src='https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/05/09125411/090518grocceries_01.jpg' className='ServiceImage' />
            <p>Daily Needs</p>
          </div>
          <div className='Somediv'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_lfs7kn9ubPn8XByBmZE_MeX1kq7Y_HrBw&usqp=CAU' className='ServiceImage' />
            <p>Education</p>
          </div>
          <div className='Somediv'>
            <img src='https://veteransdistribution.com/wp-content/uploads/2020/07/pre-delivery-inspections.jpeg' className='ServiceImage' />
            <p>Courier Services</p>
          </div>
          <div className='Somediv'>
            <img src='https://gendermatters.in/wp-content/uploads/2015/12/Dance-Site-Banner.jpg' className='ServiceImage' />
            <p>Dance & Music</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
