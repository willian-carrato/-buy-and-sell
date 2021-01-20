import styled from 'styled-components';

export const HeaderArea = styled.div`
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #ccc;
  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
  }
  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;
  }
  nav {
    padding-top: 10px;
    padding-bottom: 10px;

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul {
      display: flex;
      align-items: center;
      height: 40px;
    }
    li {
      margin-left: 20px;
      margin-right: 20px;

      a {
        color: #000;
        font-size: 14px;
        text-decoration: none;

        &hover {
          color: #999;
        }
        &.button {
          background-color: #ff8100;
          border-radius: 4px;
          color: #fff;
          padding: 5px 12px;
        }
        &.button:hover {
          background-color: #e57706;
        }
      }
    }
  }
`;
