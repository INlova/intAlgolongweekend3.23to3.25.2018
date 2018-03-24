function spinalCase(str) {
	// Swap low-upper case low-space-uppercase
	str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
	// Split on whitespace and underscores and join
	return str.toLowerCase().split(/(?:_| )+/).join('-');
}

/* 
"THESE GO TO ELEVEN" - Nigel, Spinal Tap

"Nigel:  This is a top to a, you know, what we use on stage, but it's
        very...very special because if you can see...
Marty:  Yeah...
Nigel:  ...the numbers all go to eleven.  Look...right across the board.
Marty:  Ahh...oh, I see....
Nigel:  Eleven...eleven...eleven....
Marty:  ...and most of these amps go up to ten....
Nigel:  Exactly.
Marty:  Does that mean it's...louder?  Is it any louder?
Nigel:  Well, it's one louder, isn't it?  It's not ten.  You see,
        most...most blokes, you know, will be playing at ten.  You're on ten 
        here...all the way  up...all the way up....
Marty:  Yeah....
Nigel:  ...all the way up.  You're on ten on your guitar...where can you go
        from there?  Where?
Marty:  I don't know....
Nigel:  Nowhere.  Exactly.  What we do is if we need that extra...push over
        the cliff...you know what we do?
Marty:  Put it up to eleven.
Nigel:  Eleven.  Exactly.  One louder.
Marty:  Why don't you just make ten louder and make ten be the top...
        number...and make that a little louder?
Nigel:  ...these go to eleven. */
