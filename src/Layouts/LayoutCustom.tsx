import { Layout, Menu, Breadcrumb } from "antd";
import { ContentLayout } from './ContentLayout';
import './LayoutC.css';
import { Forms } from '../Form/Forms';

const { Header, Content, Footer } = Layout;

const Informations = [
    {
        id: 1,
        title: "Orasul",
        description: "Chisinau"
    },
    {
        id: 2,
        title: "Raionul",
        description: "Ciocana"
    },
    {
        id: 3,
        title: "Strada",
        description: "str.Maria-Dragan"
    },
    {
        id: 4,
        title: "Index Postal",
        description: "MD-2000"
    },
    {
        id: 5,
        title: "Numar de telefon",
        description: "123456789"
    },



]


export const LayoutCustom = () =>{
    return(
        <>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        {new Array(4).fill(null).map((_, index) => {
                            const key = index + 1;
                            return <Menu.Item key={key}>{`Bara ${key}`}</Menu.Item>;
                        })}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Acasa</Breadcrumb.Item>
                        <Breadcrumb.Item>Detalii</Breadcrumb.Item>
                        <Breadcrumb.Item>Aplicatie</Breadcrumb.Item>
                        <Breadcrumb.Item>Notite</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="site-layout-content">
                        {   Informations.map((el, index) =>{
                            return(
                                <ContentLayout key={el.id} title={el.title} description={el.description} />
                            )
                        })
                        }

                    </div>
                    <Forms></Forms>
                </Content>
            </Layout>,
        </>
    )
}
