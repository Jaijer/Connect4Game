import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({children}) => {
    const [board, setBoard] = useState([[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]])
    const [playingNow, setPlayingNow] = useState(1); // 1 for red and 2 for yellow
    const [isGameOver, setIsGameOver] = useState(false);
    const [winner, setWinner] = useState(0);
    const [redWins, setRedWins] = useState(0);
    const [yellowWins, setYellowWins] = useState(0);


    const makeWinner = (winnerNum) => { //winnerNum is 1 for red and 2 for yellow
        setWinner(winnerNum);
            setIsGameOver(true);
            if(winnerNum === 1) { //red
                setRedWins(prev=>prev+1);
            } else {
                setYellowWins(prev=>prev+1);
            }
    }


    const checkWinning = (col, row) => { //take the position of the last piece

        //check bottom
        if(board[row][col] === board[row + 1]?.[col] && board[row][col] === board[row + 2]?.[col] && board[row][col] === board[row + 3]?.[col]) {
            makeWinner(board[row][col]);
        }

        //check right
        else if(board[row][col] === board[row][col + 1] && board[row][col] === board[row][col + 2] && board[row][col] === board[row][col + 3]) {
            makeWinner(board[row][col]);
        }

        //check left
        else if(board[row][col] === board[row][col - 1] && board[row][col] === board[row][col - 2] && board[row][col] === board[row][col - 3]) {
            makeWinner(board[row][col]);
        }

        //check Xmiddle
        else if(board[row][col] === board[row][col - 1] && board[row][col] === board[row][col - 2] && board[row][col] === board[row][col + 1]) {
            makeWinner(board[row][col]);
        }

        //check Xmiddle
        else if(board[row][col] === board[row][col + 1] && board[row][col] === board[row][col + 2] && board[row][col] === board[row][col - 1]) {
            makeWinner(board[row][col]);
        }

        //check top right
        else if(board[row][col] === board[row - 1]?.[col + 1] && board[row][col] === board[row - 2]?.[col + 2] && board[row][col] === board[row - 3]?.[col + 3]) {
            makeWinner(board[row][col]);
        }

        //check top left
        else if(board[row][col] === board[row - 1]?.[col - 1] && board[row][col] === board[row - 2]?.[col - 2] && board[row][col] === board[row - 3]?.[col - 3]) {
            makeWinner(board[row][col]);
        }

        //check bottom right
        else if(board[row][col] === board[row + 1]?.[col + 1] && board[row][col] === board[row + 2]?.[col + 2] && board[row][col] === board[row + 3]?.[col + 3]) {
            makeWinner(board[row][col]);
        }

        //check bottom left
        else if(board[row][col] === board[row + 1]?.[col - 1] && board[row][col] === board[row + 2]?.[col - 2] && board[row][col] === board[row + 3]?.[col - 3]) {
            makeWinner(board[row][col]);
        }

        //check top right - middle
        else if(board[row][col] === board[row - 1]?.[col + 1] && board[row][col] === board[row - 2]?.[col + 2] && board[row][col] === board[row + 1]?.[col - 1]) {
            makeWinner(board[row][col]);
        }

        //check top right - middle
        else if(board[row][col] === board[row - 1]?.[col + 1] && board[row][col] === board[row + 2]?.[col - 2] && board[row][col] === board[row + 1]?.[col - 1]) {
            makeWinner(board[row][col]);
        }

        //check bottom right - middle
        else if(board[row][col] === board[row + 1]?.[col + 1] && board[row][col] === board[row + 2]?.[col + 2] && board[row][col] === board[row - 1]?.[col - 1]) {
            makeWinner(board[row][col]);
        }

        //check bottom right - middle
        else if(board[row][col] === board[row + 1]?.[col + 1] && board[row][col] === board[row - 2]?.[col - 2] && board[row][col] === board[row - 1]?.[col - 1]) {
            makeWinner(board[row][col]);
        }

        else if(isTie()) {
            setWinner(0);
            setIsGameOver(true);
        }
    }

    const isTie = ()=> {
        for(let i = 0; i<board.length; i++) {
            for(let j = 0; j<board[i].length; j++) {
                if(board[i][j] === 0 || board[i][j] === 3) {
                    return false;
                }
            }
        }
        return true;
    }



    const playAt = (col) => { // Give this function the column and it will play the piece and checks if the game ended
        if(!isGameOver) {
            if(board[0][col] < 3 && board[0][col] > 0) { //full column
                return;
            }
    
            let row;
            for(let i = 6; i>=0; i--) {
                if((board[i][col] < 1) || (board[i][col] > 2)) {
                    row = i;
                    break;
                }
            }

            asyncSetThenCheck(col, row); //setBoard is async function so we need to wait for it before checking the board
        }
    }

    const asyncSetThenCheck = async (col, row) => {
        await setBoard((prev)=>{
            let newBoard = prev.slice();
            if(playingNow === 1) {
                newBoard[row][col] = playingNow;
                setPlayingNow(2);
            }
            else if(playingNow === 2) {
                newBoard[row][col] = playingNow;
                setPlayingNow(1);
            }
            return newBoard;

        })
        checkWinning(col, row);
    }


    const hoverInAt = (col) => {
        if(!isGameOver) {
            if(board[0][col]) { //full column
                return;
            }
    
            let row;
            for(let i = 6; i>=0; i--) {
                if(!(board[i][col])) {
                    row = i;
                    break;
                }
            }
    
            setBoard((prev)=>{
                let newBoard = prev.slice();
                newBoard[row][col] = 3;
    
                return newBoard;
            })
        }
    }


    const hoverOutAt = (col) => {
        if(board[0][col] < 3 && board[0][col] > 0) { //full column
            return;
        }

        let row;
        for(let i = 6; i>=0; i--) {
            if((board[0][col] > 2)) {
                row = 0;
                break;
            }
            if(!(board[i][col])) {
                row = i + 1;
                break;
            }
        }

        if(board[row]?.[col] > 2) {
            setBoard((prev)=>{
                let newBoard = prev.slice();
                    newBoard[row][col] = 0;
    
                return newBoard;
            })
        }
    }

    const restart = () => {
        setBoard([[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]);
        setIsGameOver(false);
        setWinner(0);
    }

    const quit = ()=> {
        restart();
        setRedWins(0);
        setYellowWins(0);
    }


    return <GameContext.Provider value={{
        board,
        playAt,
        hoverInAt,
        hoverOutAt,
        restart,
        quit,
        winner,
        isGameOver,
        redWins,
        yellowWins,
        playingNow,
    }}>
        {children}
    </GameContext.Provider>
}