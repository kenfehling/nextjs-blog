import Document from 'next/document';
import { createGetInitialProps } from '@mantine/next';

const getInitialProps = createGetInitialProps();

Document.getInitialProps = getInitialProps;

export default Document;
