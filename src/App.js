import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render(){
		return (
			<div className="wrapper">
				<div className="container">
					<h1 class="text-center">Quản lý công việc</h1>
					<div class="row">
						<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
							{/* Form */}
							<div class="panel panel-primary">
								<div class="panel-heading">
									<h3 class="panel-title">Thêm công việc<span><i class="fa fa-times-circle text-right" aria-hidden="true"></i></span></h3>
								</div>
								<div class="panel-body">
									<form>
										<div class="form-group">
											<label>Tên:</label>
											<input 
												type="text" 
												class="form-control" 
											/>
										</div>
										<div class="form-group">
											<label>Trạng thái:</label>
											<select 
												name="" 
												class="form-control" 
											>
												<option value="0">Ẩn</option>
												<option value="1">Hiển thị</option>
											</select>
										</div>
										
										<div class="text-center">
											<button type="submit" class="btn btn-primary">
												<i className="fa fa-plus" aria-hidden="true"></i>Lưu lại
											</button>
											<button type="submit" class="btn btn-primary">
												<i class="fa fa-times" aria-hidden="true"></i>Hủy bỏ
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
							<button type="button" class="btn btn-primary">
								<i class="fa fa-plus" aria-hidden="true"></i> Thêm công việc
							</button>
							{/*Search - sort*/}
							<div class="row">
								<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
									<div class="input-group">
										<input 
										type="text" 
										name="keyword" 
										class="form-control" 
										placeholder="Nhập từ khóa ..." 
										/>
										<span class="input-group-btn">
											<button type="button" class="btn btn-primary">
												<span class="fa fa-search mr-5"></span>Tìm
											</button>
										</span>
									</div>
								</div>
								<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
									<div class="dropdown">
										<button 
										type="button" 
										id="dropdownMenu1"
										class="btn btn-primary dropdown-toggle"
										data-toggle="dropdown"
										aria-haspopup="true"
										>
										Sắp xếp <i class="fa fa-caret-square-o-down mr-5" aria-hidden="true"></i>
										</button>
										<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
											<li>
												<a role="button" class="sort_selected">
													<i class="fa fa-sort-alpha-asc pr-5" aria-hidden="true">Tên A - Z</i>
												</a>
											</li>
											<li>
												<a role="button">
													<i class="fa fa-sort-alpha-desc pr-5" aria-hidden="true">Tên Z - A</i>
												</a>
											</li>
											<li role="separator" class="divider"></li>
											<li>
												<a role="button">
													Trạng thái ẩn
												</a>
											</li>
											<li>
												<a role="button">
													Trạng thái kích hoạt
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		);
	}
}

export default App;
