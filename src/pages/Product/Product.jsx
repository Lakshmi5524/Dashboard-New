import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import Chart from "../../Components/chart/Chart"
import { productData } from '../../dammydata'
import { Publish } from '@material-ui/icons'

const Product = () => {
	return (
		<div className="product">
			<div className="productTitleContainer">
				<h1 className="productTitle">Product</h1>
				<Link to="/newproduct">
					<button className="productButton">Create</button>
				</Link>
			</div>
			<div className="productTop">
				<div className="productLeft">
					<Chart data={productData} datakey="Sales" title="sales Performance" />
				</div>
				<div className="productRight">
					<div className="productinfoTop">
						<img src="https://5.imimg.com/data5/SELLER/Default/2020/11/XV/IE/IW/91441441/01-250x250.JPG" alt="" className="productImg" />
						<span className="productName">Apple Airpods</span>
					</div>
					<div className="productinfoTopBottom">
						<div className="productinfoItem">
							<span className="productKey">id:</span>
							<span className="productValue">123</span>
						</div>

						<div className="productinfoItem">
							<span className="productKey">Sales:</span>
							<span className="productValue">123</span>
						</div>

						<div className="productinfoItem">
							<span className="productKey">Active:</span>
							<span className="productValue">yes</span>
						</div>

						<div className="productinfoItem">
							<span className="productKey">in Stock:</span>
							<span className="productValue">no</span>
						</div>
					</div>
				</div>
			</div>
			<div className="ProductButton">
				<form className="productForm">
					<div className="productFormLeft">
						<label>Product Name</label>
						<input type="text" placeholder="Apple AirPod" />
						<label>In Stock</label>
						<select name="instock" id="idStock">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>

						<label>Active</label>
						<select name="active" id="active">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>

					<div className="productFormRight">
						<div className="productUpload">
							<img src="https://5.imimg.com/data5/SELLER/Default/2020/11/XV/IE/IW/91441441/01-250x250.JPG" ltd="" className="productUploadImg" />
							<label for="file">
								<Publish />
							</label>
							<input type="file" id="file" style={{ display: " none" }} />
						</div>
						<button className="productUploadButton">Upload</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Product
