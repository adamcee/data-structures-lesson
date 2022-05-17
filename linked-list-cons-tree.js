/**
 * Rules of the game.
 * We are simulating an earlier time in computing, where we had to work directly with memory.
 *
 * Each address in memory is divided into two parts of equal size, the head (hd) and the tail (tl).
 * We can pretend that hd and tl are each 8 bits (1 byte) in length.
 *
 * hd and tail each are big enough to contain a char, integer between 0 and 255, boolean, null, OR a pointer to another address in memor.
 *
 * Example: address containing 'a' and 'b'
 *
 * ```
 * {
 *      hd: 'a',
 *      tl: 'b',
*  }
*
*  {
*      hd: 12,
*      tl: null,
*  }
*  ```
*
 *
 * A JS OBJECT REPRESENTS A LOCATION IN MEMORY.
 *
 * Example: This address contains a char and points to ANOTHER address which contains two more chars.
 *
 * ```
 * {
 *      hd: 's',
 *      tl: {
 *          hd: 'a',
 *          tl: 'y',
*       },
* }
* ```
*
* Here is a more complex example:
*
 * ```
 * {
 *      hd: 'h',
 *      tl: {
 *          hd: 'e',
 *          tl: {
 *              hd: 'l',
 *              tl: {
 *                  hd: 'l',
 *                  tl: {
 *                      hd: 'o',
 *                      tl: null,
 *                 }
 *             }
 *         }
 *     }
 * }
 * ```
 *
 * The above example demonstrates a singly-linked list data structure.
 * With it we will see how to represent strings of characters, and a binary tree data structure. And maybe a stack!
 *
 * IMPORTANT: null indicates that THERE IS NOTHING in this part of an address.
 * We can use this when we write programs to our advantage.
 *
 *
 *
 * THE RULES:
 *
 * ALL DATA must live in objects representing our memory addresses.
 * We can most JS language features for our programming, EXCEPT objects which should only be used in the way specified -- representing memory addresses.
 *
* Because space is limited in this computer, we can only create one JS variable containing an object, which is a pointer
* to a specific address in memory. This variable is called index.
*
* You are allowed to create variables containing chars, ints, boolean, null, or be undefined, BUT REMEMBER -- all data for our programs
* must exist in memory!!
*
* We can create all the functions we want though!
*/

// If we did this, the ONLY data available to us in memory would be 'x' and 'z'
const index = {
    hd: 'x',
    tl: 'z',
}

// Here is an example, using JS, to represent builing a binary tree for our machine.
const index = {
    hd: 1,
    tl: {
        hd: {
            hd: 2,
            tl: {
                hd: 3,
                tl: 4,
            },
        },
        tl: {
            hd: 5,
            tl: null,
        },
    }
}

/** WIP -- tree building functions **/

function node(left, right) {
    return {
        hd: left,
        tl: right,
    }
}

function nodeWithVal(left, right, val) {
    return {
        hd: val,
        tl: {
            hd: left,
            tl: right,
        }
    }
}

function nodeWithParent(val, left, right, parent) {
    return {
        hd: {
            hd: parent,
            tl: val,
        },
        tl: {
            hd: left,
            tl: right,
        },
    }
}
