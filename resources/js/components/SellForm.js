import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";
import axios from "axios";

export default class SellForm extends Component {
    constructor() {
        super();
        this.state = {
            barang: [],
            newBarangModal: false,
            newBarangData: {
                nama_barang: "",
                deskripsi: "",
                kategori: "",
                foto: "",
                harga: "",
                id_penjual: "",
                id: ""
            }
        };
        this.addBarang = this.addBarang.bind(this);
    }

    loadBarang() {
        axios.get("http://localhost:8000/api/").then(response => {
            this.setState({
                barang: response.data
            });
        });
    }

    toogleNewProductModal() {
        this.setState({
            newBarangModal: true
        });
    }

    toogleNeProductkModal2() {
        this.setState({
            newBarangModal: false
        });
    }

    componentWillMount() {
        this.loadBarang();
    }

    checkfk(fakepath) {
        var splits = fakepath.split("fakepath\\");
    }

    addBarang() {
        var _this = this;
        axios.post("/api/", _this.state.newBarangData).then(response => {
            let { barang } = _this.state;
            _this.loadBarang();
            _this.setState({
                barang,
                newBarangModal: false,
                newBarangData: {
                    nama_barang: "",
                    deskripsi: "",
                    kategori: "",
                    foto: "",
                    harga: "",
                    id_penjual: "",
                    id: ""
                    // KONTAK_PENJUAL:"",
                    // METODE_PENJUALAN:"",
                }
            });
        });
    }

    render() {
        return (
            <div>
                <Button
                    color="primary"
                    onClick={this.toogleNewProductModal.bind(this)}
                >
                    Open modal
                </Button>
                <Modal
                    isOpen={this.state.newBarangModal}
                    toggle={this.toogleNewProductModal.bind(this)}
                >
                    <ModalHeader toggle={this.toogleNewProductModal.bind(this)}>
                        Product Form
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="id">ID</Label>
                            <Input
                                type="text"
                                id="id"
                                name="id"
                                placeholder="Masukkan ID"
                                value={this.state.newBarangData.id}
                                onChange={e => {
                                    let { newBarangData } = this.state;
                                    newBarangData.id = e.target.value;
                                    this.setState({ newBarangData });
                                }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="id_penjual">ID PENJUAL</Label>
                            <Input
                                type="text"
                                id="id_penjual"
                                name="id_penjual"
                                placeholder="Masukkan ID PENJUAL"
                                value={this.state.newBarangData.id_penjual}
                                onChange={e => {
                                    let { newBarangData } = this.state;
                                    newBarangData.id_penjual =
                                        e.target.value[0];
                                    this.setState({ newBarangData });
                                }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="nama_barang">Nama Barang</Label>
                            <Input
                                type="text"
                                id="nama_barang"
                                name="nama_barang"
                                placeholder="Masukkan Nama Barang"
                                value={this.state.newBarangData.nama_barang}
                                onChange={e => {
                                    let { newBarangData } = this.state;
                                    newBarangData.nama_barang = e.target.value;
                                    this.setState({ newBarangData });
                                }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="DESKRIPSI_BARANG">
                                Deskripsi Barang
                            </Label>
                            <Input
                                type="text"
                                name="deskripsi"
                                placeholder="Masukkan Deskripsi Barang"
                                value={this.state.newBarangData.deskripsi}
                                onChange={e => {
                                    let { newBarangData } = this.state;
                                    newBarangData.deskripsi = e.target.value;
                                    this.setState({ newBarangData });
                                }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="kategori">Kategori Barang</Label>
                            <Input
                                type="select"
                                id="kategori"
                                placeholder="Kategori Barang"
                                value={this.state.newBarangData.kategori}
                                onChange={e => {
                                    let { newBarangData } = this.state;
                                    newBarangData.kategori = e.target.value;
                                    this.setState({ newBarangData });
                                }}
                            >
                                <option>Barang Kosan</option>
                                <option>Elektronik</option>
                                <option>Kosmetik</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="foto">Deskripsi Barang</Label>
                            <Input
                                type="file"
                                id="foto"
                                name="foto"
                                placeholder="Masukkan Deskripsi Barang"
                                value={this.state.newBarangData.foto}
                                onChange={e => {
                                    let { newBarangData } = this.state;
                                    newBarangData.foto = e.target.value;
                                    this.setState({ newBarangData });
                                }}
                            ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="harga">Harga Barang</Label>
                            <Input
                                type="text"
                                id="harga"
                                placeholder="Input Harga"
                                value={this.state.newBarangData.harga}
                                onChange={e => {
                                    let { newBarangData } = this.state;
                                    newBarangData.harga = e.target.value;
                                    this.setState({ newBarangData });
                                }}
                            ></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={this.addBarang.bind(this)}
                        >
                            Sell Product
                        </Button>
                        {""}
                        <Button
                            color="secondary"
                            onClick={this.toogleNeProductkModal2.bind(this)}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

if (document.getElementById("sellForm")) {
    ReactDOM.render(<SellForm />, document.getElementById("sellForm"));
}
