walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bdreg\b/g, "greg");
	v = v.replace(/\bdreg\b/g, "Greg");
	v = v.replace(/\bDREG\b/g, "GREG");
	v = v.replace(/\bvandal\b/g, "randal");
	v = v.replace(/\bVandal\b/g, "Randal");
	v = v.replace(/\bVANDAL\b/g, "RANDAL");
	v = v.replace(/\bshank\b/g, "skank");
	v = v.replace(/\bShank\b/g, "Skank");
	v = v.replace(/\bSHANK\b/g, "SKANK");
	
	textNode.nodeValue = v;
}


