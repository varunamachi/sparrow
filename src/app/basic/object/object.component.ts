import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { TreeNode } from 'primeng/components/common/treenode';

interface ObjectTreeNode extends TreeNode {
    dataType: string;
}

@Component({
    selector: 'app-object',
    templateUrl: './object.component.html',
    styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit, OnChanges {

    @Input('object') object: Object;

    treeNodes: ObjectTreeNode[];

    constructor() { }

    ngOnInit() {
        // this.treeNodes = <TreeNode[]>this.getAsTreeNode(this.object);
    }

    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
            if (propName === 'object') {
                const o = changes[propName].currentValue;
                if (o) {
                    this.treeNodes = <ObjectTreeNode[]>this.getAsTreeNode(o);
                }
                break;
            }
        }
    }

    getAsTreeNode(obj: Object) {
        let treeNode: ObjectTreeNode[] = [];
        Object.entries(obj).forEach((value, index) => {
            const data = <ObjectTreeNode>{};
            data.label = value[0];
            data.type = 'treeLabel';
            if (Object.isExtensible(value[1])) {
                data.data = "";
                data.children = this.getAsTreeNode(value[1]);
            } else {
                data.data = value[1];
            }
            if(value[1] instanceof Array) {
                data.dataType = "array";
            } else if(value[1] instanceof Object) {
                data.dataType = "object";
            }else{
                data.dataType = "property";
            }
            treeNode.push(data);
        })
        return treeNode;
    }
    // getAsTreeNode(obj: Object, x: ObjectComponent) {
    //     let treeNode: TreeNode[] = [];
    //     Object.entries(obj).forEach(function (value, index) {
    //         const data = <TreeNode>{};
    //         data.label = value[0];
    //         data.type = 'treeLabel';
    //         if (Object.isExtensible(value[1])) {
    //             data.data = "";
    //             data.children = x.getAsTreeNode(value[1], x);
    //         } else {
    //             data.data = ":" + value[1];
    //         }
    //         treeNode.push(data);
    //     })
    //     return treeNode;
    // }
}
