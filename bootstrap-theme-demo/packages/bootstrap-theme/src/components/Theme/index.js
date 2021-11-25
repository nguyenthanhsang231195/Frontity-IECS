import React from "react";
import { Global, css, connect, Head } from "frontity";
import Switch from "@frontity/components/switch";

import {fixCss} from '../../helpers/css';

import Header from '../Header/';
import List from '../List/';
import Post from '../Post/';
import Loading from '../Loading/';
import Title from '../Title/';
import PageError from '../PageError/';

import {globalStyles, HeadContainer, Main} from './styles'
import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css';

import HomeScreen from "../HomeScreen";

const fixedBootstrapCss = fixCss(bootstrapCss)
const BootstrapStyles = () => (
  <Global styles={css(fixedBootstrapCss)} />
);

const Theme = ({ state }) => {

    const data = state.source.get(state.router.link);
    const title = state.frontity.title;

    return (
<>
<Title />
<Head>
    <meta name="description" content={state.frontity.description} />
    <html lang="en" />
    <link 
        rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" 
        integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
        crossorigin="anonymous" />
</Head>

    <BootstrapStyles />
    <Global styles={globalStyles} />
      
    <HeadContainer>
        <Header />
    </HeadContainer>
         
<Main>
    {/* Phần chuyển đổi các trang */}
    <Switch>
        {/* isArchive lưu trữ giá trị đến khi chuyển trang ứng với mục bài viết */}
        <HomeScreen when={data.isArchive} />

        <Loading when={data.isFetching} />
        <List when={data.isArchive} />
        <Post when={data.isPostType} />
        <PageError when={data.isError} />
    </Switch>
</Main>
</>
  );
};

export default connect(Theme);