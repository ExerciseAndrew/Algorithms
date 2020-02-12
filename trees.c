#include <vector>
#include <iostream>

template <typename T>
struct Node {
    T data = {};
    Node<T>* left = nullptr;
    Node<T>* right = nullptr;
    
    void del(Node<T>*& n)
    {
        if (n) {
            del(n->left);
            del(n->right);
            delete n;
            n = nullptr;
        }
    }
    
    void insert(T new_data)
    {
        insert_impl(this, new_data);   
    }
    
    void print()
    {
        print_impl(this);
    }
    
    Node<T>* find(T query)
    {
        return find_impl(this, query);   
    }

private:
    void insert_impl(Node<T>* n, T new_data)
    {
        if (n) {
            if (n->data == new_data) return; // this shouldn't happen; already exists

            auto& child = (new_data < n->data) ? n->left : n->right;
            insert_impl(child, new_data);   
        } else {
            n = new Node<T>;
            n->data = new_data;
        }
    }
    
    void print_impl(Node<T>* n)
    {
        if (n) {
            print_impl(n->left);
            std::cout << n->data << std::endl;
            print_impl(n->right);
        }
    }

    Node<T>* find_impl(Node<T>* n, T query)
    {
        if (n) {
            if (n->data == query) return n;
        
            if (query < n->data) {
                return find_impl(n->left, query);
            } else {
                return find_impl(n->right, query);            
            }
        } else {
            return nullptr;
        }
    }

};



template <typename T>
void find_(Node<T>* root, T data)
{
    Node<T>* result = root->find(data);
    if (result) {
        std::cout << "got it" << std::endl;
    } else {
        std::cout << "didnt get it :(" << std::endl;
    }
}

int main()
{
    using T = float;
    Node<T>* root = new Node<T>;
    root->data = 3.f;

    root->insert(1.f);
    root->insert(5.f);
    root->insert(0.f);
    root->insert(2.f);
    root->insert(4.f);
    root->insert(6.f);
    
    root->print();
    
    auto x = 2.5f;
    find_(root, x);
    root->insert(x);
    find_(root, x);

    return 0;
}